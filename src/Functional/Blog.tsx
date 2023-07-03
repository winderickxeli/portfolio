// Functional
import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

// Visual
import styles from '../CSS/styles.module.css';

const Blog = () => {

    const [html, setHTML] = useState("");

    //Use componentDidMount(): if class based component to load md file
    useEffect(() => {
        fetch("./Blog/2023-06-29-zabbix-Prometheus.markdown")
            .then(data => data.text())
            .then(text => {
                const converter = new showdown.Converter();
                setHTML(converter.makeHtml(text));
            })
    }, []);

    return (
        <main className={styles.Content} style={{width:"80%"}}>
            {parse(html)}
        </main>
    )
}

export default Blog;