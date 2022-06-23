import React, { useState, useEffect, useRef } from 'react'
import { dataSlider } from '../../resources/Data'
import styled from 'styled-components'

export const Container = styled.div`
    height: 250px;
    width: 250px;
    display: flex;
    justify-content: center;
    background: #000;
    overflow: hidden;
    border-radius: 20px;
`
export const Image = styled.img`
    width: 300px;
    height: 300px;    
    object-fit: cover;
`
export default function Banner({ slides }) {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(
        () => {
            const passSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1))
            }
            timeout.current = setTimeout(passSlide, 30000)

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current)
                }
            }
        }, [current, length])

    return (
        <Container>
            {dataSlider.map((slide, index) => (
                <div key={index}>
                    {index === current && (
                        <div>
                            <Image src={slide.url} />
                        </div>
                    )}
                </div>
            ))}
        </Container>
    )
}
