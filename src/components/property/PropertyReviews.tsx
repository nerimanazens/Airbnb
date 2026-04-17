
export default function PropertyReviews({ reviewername, reviewstars, reviewtext, reviewdate }: { reviewername: string, reviewstars: number, reviewtext: string, reviewdate: string }) {
    return (
        <div>
            <span>{reviewername}</span>
            <span>{reviewstars}</span>
            <p>{reviewtext}</p>
            <p>{reviewdate}</p>
        </div>
    )
}