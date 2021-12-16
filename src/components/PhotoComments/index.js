import { useContext, useEffect, useRef, useState } from "react"
import { UserStorageContext } from "../../contexts/UserContext"
import { PhotoCommentsForm } from "../PhotoCommentsForm"

import styles from './styles.module.scss'

export function PhotoComments(props) {
    const { login } = useContext(UserStorageContext)
    const [comments, setComments] = useState(() => props.comments)
    const commentsSection = useRef(null)

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight

    }, [comments])

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
                {comments.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>)
                }
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}