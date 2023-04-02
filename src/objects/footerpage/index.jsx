import React from 'react';
import { ReactComponent as IconEnvelope } from '../../assets/icons/envelope.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/github.svg';
import { ReactComponent as IcoLinkedinn } from '../../assets/icons/linkedin.svg';
import './style.scss'

const FooterPage = () => {

    return (
        <>
            <footer className='footer'>
                <p className='footer__text'>
                    By Leandro Sampaio
                    <a className='footer__link' href='mailto:leandro.r.sampaio@gmail.com' target={'_blank'} rel='noreferrer'>
                        <IconEnvelope className='svgIcon svgIcon--envelope' />
                    </a>
                    <a className='footer__link' href='https://github.com/leandrorsampaio/' target={'_blank'} rel='noreferrer'>
                        <IconGithub className='svgIcon svgIcon--github' />
                    </a>
                    <a className='footer__link' href='https://www.linkedin.com/in/leandrosampaio/' target={'_blank'} rel='noreferrer'>
                        <IcoLinkedinn className='svgIcon svgIcon--linkedin' />
                    </a>
                </p>
            </footer>
        </>
    );
};

export default FooterPage;
