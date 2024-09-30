import React, { ComponentProps, useRef } from 'react'
import { StyleSheet, TextInput } from 'react-native'

type Props = ComponentProps<typeof TextInput>

export default function Input({ ...rest }: Props) {
    const ref = useRef<TextInput>(null)

    const handleFocus = () => {
        ref.current?.setNativeProps({
            style:
            {
                backgroundColor: '#363636',
                borderColor: '#fff',
                borderWidth: 1
            }
        })
    }

    const handleBlur = () => {
        ref.current?.setNativeProps({
            style:
            {
                backgroundColor: '#222222',
                borderColor: '#2a2a2a',
                borderWidth: 1
            }
        })
    }


    return (
        <TextInput {...rest}
            ref={ref}
            style={styles.input}
            onBlur={handleBlur}
            onFocus={handleFocus}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#222222',
        color: '#fff',
        padding: 12,
        borderRadius: 4,
        marginBottom: 12,
    }
})