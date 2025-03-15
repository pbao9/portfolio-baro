const ViewPort = ({ data }: { data: string }) => {
    return (
        <div className="screen">
            <div
                className="viewport"
                style={{
                    backgroundImage: `url('${data}')`,
                }}
            ></div>
        </div>
    )
}

export default ViewPort
