import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {FileInput, Input} from '../utils/FormControls'
import {maxTextLength, minTextLength, notEmail, notPhone, required} from '../utils/validators'
import {RedButton} from '../components'

const RegistrationForm = ({handleSubmit, isDisabled, submitSucceeded}) => {

    const [isFocus, setIsFocus] = useState(0)

    const maxTextLength60 = maxTextLength(60)
    const minTextLength2 = minTextLength(2)

    const onFocus = () => {
        setIsFocus(isFocus + 1)
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit}>
                <label className={'form-text'}>Name</label>
                <div className={'form__input'}>
                    <Field component={Input} name={'name'} label={'Your name'} disabled={isDisabled} validate={[required, minTextLength2, maxTextLength60]}
                    onFocus={onFocus}/>
                </div>
                <label className={'form-text'}>Email</label>
                <div className={'form__input'}>
                    <Field component={Input} name={'email'} label={'Your email'} disabled={isDisabled} validate={[required, notEmail]}
                           type={'email'} onFocus={onFocus}/>
                </div>
                <label className={'form-text'}>Phone number</label>
                <div className={'form__input'}>
                    <Field component={Input} name={'phone'} label={'+380 XX XXX XX XX'} disabled={isDisabled} validate={[required, notPhone]}
                           type={'phone'} onFocus={onFocus}/>
                           <label className={'form-text'}>Enter phone number in open format</label>
                </div>
                <div className={'form__position'}>
                    <label className={'form-text'}>Select your position</label>
                    <div className={'form__position-block'}>
                        <label className={'form__position-item'}>
                            <Field component={Input} name={'position_id'} label={undefined} validate={[required]}
                                   type={'radio'} value={'1'} onFocus={onFocus}/>&nbsp; Frontend developer
                        </label>
                        <label className={'form__position-item'}>
                            <Field component={Input} name={'position_id'} label={undefined} validate={[required]}
                                   type={'radio'} value={'2'} onFocus={onFocus}/>&nbsp; Backend developer
                        </label>
                        <label className={'form__position-item'}>
                            <Field component={Input} name={'position_id'} label={undefined} validate={[required]}
                                   type={'radio'} value={'3'} onFocus={onFocus}/>&nbsp; Designer
                        </label>
                        <label className={'form__position-item'}>
                            <Field component={Input} name={'position_id'} label={undefined} validate={[required]}
                                   type={'radio'}  value={'4'} onFocus={onFocus}/>&nbsp; QA
                        </label>
                    </div>
                </div>
                <label className={'form-text'}>Photo</label>
                <div className={'form__photo'}>
                    <Field component={FileInput} name={'photo'} validate={[required]} label={'Upload your photo'} isFocus={isFocus} submitSucceeded={submitSucceeded}/>
                </div>
                <div className={'form__button'}>
                    <RedButton type="submit" title={'Sign up now'} disabled={isDisabled} />
                </div>
            </form>
        </div>
    );
}

export default reduxForm({form: 'registration'})(RegistrationForm)