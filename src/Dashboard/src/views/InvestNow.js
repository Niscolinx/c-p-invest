import React from "react";
import {
  CFormGroup,
  CLabel,
  CInputRadio,
  CCol,
  CWidgetIcon,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInputGroupAppend,
  CInput,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

function Features() {
  return (
    <>
      <div className="features">
        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
          <div>
            <input type="radio" value="hello" id="inline-radio" />
            <label htmlFor="inline-radio">Deposit now</label>
          </div>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
          <CFormGroup variant="custom-radio" inline>
            <CInputRadio
              custom
              id="inline-radio1"
              name="inline-radios"
              value="option1"
            />
            <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
              One
            </CLabel>
          </CFormGroup>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <h1 className="heading-1 feature__icon-percent">20%</h1>
            <h1 className="heading-1 feature__icon-text">Ruby</h1>
          </div>

          <ul className="feature__list">
            <li className="feature__list-item">minimum - 1500</li>
            <li className="feature__list-item">minimum - 2500</li>
            <li className="feature__list-item">minimum - 3500</li>
            <li className="feature__list-item">minimum - 4500</li>
          </ul>
          <button className="btn feature__btn">Deposit Now</button>
        </div>
      </div>

      <div className="features__spend">
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Balance"
            header="$1.999,50"
            color="primary"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>

        <CFormGroup row>
          <CCol md="12">
            <CInputGroup>
              <CInputGroupPrepend>
                <CInputGroupText>$</CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                id="input3-group1"
                name="input3-group1"
                style={{color: 'black'}}
                placeholder="Amount to Spend"
              />
              <CInputGroupAppend>
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="9">
            <CFormGroup variant="checkbox">
              <CInputRadio
                className="form-check-input"
                id="radio1"
                name="radios"
                value="option1"
              />
              <CLabel variant="checkbox" htmlFor="radio1">
                Spend from Bitcoin
              </CLabel>
            </CFormGroup>
            <CFormGroup variant="checkbox">
              <CInputRadio
                className="form-check-input"
                id="radio2"
                name="radios"
                value="option2"
              />
              <CLabel variant="checkbox" htmlFor="radio2">
                Spend from Ethereum
              </CLabel>
            </CFormGroup>
          </CCol>
        </CFormGroup>

        <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <CButton block color="primary">
            Spend
          </CButton>
        </CCol>
      </div>
    </>
  );
}

export default Features;
