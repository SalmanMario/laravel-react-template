import { Link } from '@tanstack/react-router'

function Navbar() {
    return (
        <div>
            <nav style={{ display: 'flex', gap: 12 }}>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </nav>

            <hr />
        </div>
    )
}

export default Navbar;
