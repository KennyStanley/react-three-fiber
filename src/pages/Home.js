import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/character">Character</Link>
                </li>
                <li>
                    <Link to="/playground">Playground</Link>
                </li>
                <li>
                    <Link to="/conference">Conference</Link>
                </li>
            </ul>
        </div>
    )
}
