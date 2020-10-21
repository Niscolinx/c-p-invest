import * as actionTypes from './actionTypes'
//import axios from '../../axios'
//import { areas } from '../../components/Layout/DeliveringForm/Locations'

export const initFundAccount = (fundData, token, userId) => {
    const formData = new FormData()

    formData.append('image', fundData.file['0'])


    fetch('http://localhost:3030/post-image', {
        method: 'PUT',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: formData,
    })
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            console.log('result', result)
            const imageUrl = result.filePath

            let graphqlQuery = {
                query: `
                    mutation { createPost(fundData: {
                            title: "${fundData.title}",
                            content: "${fundData.content}",
                            imageUrl: "${imageUrl}"
                        }){
                            _id
                            title
                            content
                            imageUrl
                            creator {
                                username
                            }
                            createdAt
                        }
                    }
                `,
            }

            if (this.state.editPost) {
                graphqlQuery = {
                    query: `
                        mutation { updatePost( id: "${this.state.editPost._id}", fundData: {
                                title: "${fundData.title}",
                                content: "${fundData.content}",
                                imageUrl: "${imageUrl}"
                            }){
                                _id
                                title
                                content
                                imageUrl
                                creator {
                                    username
                                }
                                createdAt
                            }
                        }
                    `,
                }
            }

            this.setState({
                editLoading: true,
                imagePath: result.filePath,
            })

            return fetch('https://mynode-blog.herokuapp.com/graphql', {
                method: 'POST',
                body: JSON.stringify(graphqlQuery),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.props.token,
                },
            })
        })

        .then((res) => {
            return res.json()
        })
        .then((resData) => {
            let queryToPost = 'createPost'

            if (this.state.editPost) {
                queryToPost = 'updatePost'
            }

            const postQuery = resData.data[queryToPost]

            if (resData.errors && resData.errors[0].status === 422) {
                throw new Error(
                    "Validation failed. Make sure the email address isn't used yet!"
                )
            }

            if (resData.errors) {
                throw new Error('Creating or editing a post failed!')
            }

            const post = {
                _id: postQuery._id,
                title: postQuery.title,
                content: postQuery.content,
                creator: postQuery.creator.username,
                createdAt: postQuery.createdAt,
                imagePath: postQuery.imageUrl,
            }
            this.setState((prevState) => {
                const updatedPosts = [...prevState.posts]
                let updatedTotalPosts = prevState.totalPosts

                if (prevState.editPost) {
                    const findIndex = prevState.posts.findIndex((p) => {
                        return p._id === prevState.editPost._id
                    })

                    updatedPosts[findIndex] = post
                } else {
                    updatedTotalPosts++
                    if (prevState.totalPosts.length >= prevState.lastPage) {
                        updatedPosts.pop()
                    }
                    updatedPosts.unshift(post)
                }
                return {
                    posts: updatedPosts,
                    totalPosts: updatedTotalPosts,
                    isEditing: false,
                    editPost: null,
                    editLoading: false,
                }
            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                isEditing: false,
                editPost: null,
                editLoading: false,
                error: err,
            })
        })
}
