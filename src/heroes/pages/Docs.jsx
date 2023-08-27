import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';

export const Docs = () => {

    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        // Carga el contenido del archivo .md aquí y actualiza el estado
        fetch('src/assets/instrucciones.md')
            .then(response => response.text())
            .then(markdownContent => {
                setMarkdownContent(markdownContent);
            });
    }, []);



    return (
        <div className="p-5 container">
            <ReactMarkdown >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );

}
