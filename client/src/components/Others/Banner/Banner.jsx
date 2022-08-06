import React, { useState, useEffect, useRef } from 'react'
import { dataSlider } from '../../../resources/Data'
import {
    Container,
    Image
} from './BannerStyle'

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
