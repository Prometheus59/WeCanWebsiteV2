import React from 'react';
import { Parallax, Background } from 'react-parallax';
import PaperSheets from './PaperSheets';

export default class ParallaxEffect extends React.Component {
    render() {
        return (
            <div>
                <Parallax
                    blur={2}
                    bgImage={require('../images/placeholder.jpg')}
                    bgImageAlt="placeholder image"
                    strength={500}
                >
                    <PaperSheets />
                </Parallax>
            </div>
        )
    }
}