import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const SendPenalty = () => {
    return (
        <div>
            
        </div>
    )
}

SendPenalty.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SendPenalty)
