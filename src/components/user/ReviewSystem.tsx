"use client"
import { useState } from "react";

export default function ReviewSystem() {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        <form onSubmit={(e) => { e.preventDefault() }}>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
            <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} min={1} max={5} />
            <button type="submit">Submit Review</button>
        </form>
    }
}