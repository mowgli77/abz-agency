import React, {useEffect, useState} from 'react'


export const Input = ({input, label, disabled, meta: {touched, error, warning}, ...props}) => {

    return <div>
        <div className={touched && error && 'err-input'}>
            <input placeholder={label} disabled={disabled} {...input} {...props} />{props.text}
        </div>
        <div className={'err-input'}>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
}

export const FileInput = ({label, isFocus, submitSucceeded, meta: {touched, error, warning}, ...props}) => {

    const [fileLabel, setFileLabel] = useState(label)
    const [isFileFocus, setIsFileFocus] = useState(isFocus)
    const [inputStyle, setInputStyle] = useState(['fileinput', 'fileinput__button'])

    useEffect(() => {
        if (submitSucceeded) {
            setFileLabel('Upload your photo')
            setInputStyle(['fileinput', 'fileinput__button'])
        }
    }, [submitSucceeded])

    useEffect(() => {
        setIsFileFocus(isFocus)
    }, [isFocus])


    const onChange = (e) => {
        const {input: {onChange}} = props
        if (e.target.files?.length) {
            onChange(e.target.files[0])
            setFileLabel(e.target.files[0].name)
        }
    }
    const onClick = () => {
        if (fileLabel === 'Upload your photo') {
            setFileLabel('No file chosen')
        }
        setIsFileFocus(0)
        setInputStyle(['fileinput-active', 'fileinput-active__button'])
    }

    return <div>
        <div>
            <div
                className={isFileFocus && fileLabel !== 'No file chosen' && fileLabel !== 'Upload your photo' ? 'fileinput-fill' : isFileFocus && fileLabel === 'No file chosen' ? 'fileinput-err' : touched && error ? 'fileinput-err' : inputStyle[0]}>
                <label htmlFor={'file'}>{fileLabel}
                    <div
                        className={isFileFocus && fileLabel !== 'No file chosen' ? 'fileinput-fill__button' : isFileFocus && fileLabel === 'No file chosen' ? 'fileinput-err__button' : touched && error ? 'fileinput-err__button' : inputStyle[1]}>Browse
                    </div>
                </label>
                <div>
                    <input id={'file'}
                           type='file'
                           accept='.jpg, .png, .jpeg'
                           onChange={onChange}
                           onClick={onClick}
                    />
                </div>
            </div>
        </div>
        <div className={'err-fileinput'}>
            {touched && error ? <span>{error}</span> :
                touched && warning ? <span>{warning}</span> :
                    isFileFocus && fileLabel === 'No file chosen' ? <span>{error}</span> :
                        undefined}
        </div>
    </div>
}