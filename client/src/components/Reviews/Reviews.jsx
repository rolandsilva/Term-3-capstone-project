function Reviews ({ reviews }) {
    const { id, product_Id, user_id, rating,comment,date } = reviews;
  
    return (
        <div className="reviewContainer" key={id}>
          <h2>Review Information</h2>
          <p>Product Id: {product_Id}</p>
          <p>User id: {user_id}</p>
          <p>Rating: {rating}</p>
          <p>Comment: {comment}</p>
          <p>Date: {date}</p>
        </div>
      );
    }

export default Reviews
