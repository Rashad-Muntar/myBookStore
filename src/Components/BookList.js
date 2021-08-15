
const BookList = (props) => {

    
    return (
      <div>
           <table >
               <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.books.map(book => {
                     return( 
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.category}</td>
                        </tr>
                     ) 
                    })
                }
            </tbody>
        </table>
      </div>
    )
}

export default BookList