const getCategories=async()=>{

    const response = await fetch(`http://localhost:8080/en/api/taxonomy_term/vactory_blog_categories`)
    const data = await response.json();

    return data;

}

export default getCategories;