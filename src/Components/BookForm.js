import React, {useState} from "react"

const BookForm = (props) => {

    const [bookTitle, setBookTitle] = useState('')
    const [bootCategory, setBookCategory] = useState('')

    const titleChangeHandler = (e) => {
        setBookTitle(e.target.value)
    }

    const categorySelectHander = (e) => {
        setBookCategory(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const newBookData = {
            title: bookTitle,
            category: bootCategory,
            id: Math.random().toFixed(2)
        }
        props.onAddBook(newBookData)
        setBookTitle('')
        setBookCategory('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={titleChangeHandler} value={bookTitle} required type=""text placeholder="Enter Book title"/>
                <select onChange={categorySelectHander} value={bootCategory}>
                    <option >Biography</option>
                    <option >History</option>
                    <option >Horror</option>
                    <option >Kids</option>
                    <option >Learning</option>
                    <option >Sci-Fi</option>
                </select>
                <button type="submit">ADD BOOK</button>
            </form>
        </div>
    )
}

export default BookForm