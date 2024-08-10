// import ;



function Avatar({person, size, onClick}){
    

    return(
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            onClick={onClick}
        />
    )
}

export default Avatar;