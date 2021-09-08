import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/boxes">Boxes</Link>
                </li>
                <li>
                    <Link to="/character">Character</Link>
                </li>
            </ul>
        </div>
    )
}
