import React from 'react'
import './explicativescard.css'
function CardsExplicativos() {
    return (
        <div className='cards-explicativos'>
            <div class="row d-flex justify-content-around cards">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Engajamento</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Motivação</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Produtividade</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardsExplicativos