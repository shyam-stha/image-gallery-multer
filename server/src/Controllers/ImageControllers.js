export const getImages = async (req, res, next) => {
    try {

    } catch (error) {

    }

}

export const postImage = async (req, res, next) => {
    console.log(req.file)
    res.status(200).json({
        message: "File Received ..."
    })
    next()
}

export const deleteImage = async (req, res, next) => {
    try {

    } catch (error) {

    }
}
