function Users({ id, name, email }) {
    return <>
        <div className="col-md-4">
            <div className="user">
                <h2>{id}</h2>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    </>
}

export default Users;
