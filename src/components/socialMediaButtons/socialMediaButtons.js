import React from 'react';
import './socialMediaButtons.css'

function SocialMediaButtons() {
    return (
        <div className="group-icons">
            <a className="space-icon" href="https://www.instagram.com/orcestragamificacao/?hl=pt-br" target="_blank">
                <i class="icons fa fa-instagram fa-2x color-icons"></i>
            </a>
            <a className="space-icon" href="https://www.facebook.com/Orcestra.Ej/" target="_blank">
                <i class="icons fa fa-facebook-square fa-2x color-icons"></i>
            </a>
            <a className="space-icon" href="https://www.linkedin.com/company/orcestragamificacao/" target="_blank">
                <i class="icons fa fa-linkedin fa-2x color-icons"></i>
            </a>
        </div>
    );
}
export default SocialMediaButtons