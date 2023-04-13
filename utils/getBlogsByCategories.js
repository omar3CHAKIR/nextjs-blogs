async function getBlogByCategorie(props) {
    let response;
    
    if (props.categoryType == "categorie 1") {
      response = await fetch(
        `http://localhost:8080/en/api/node/vactory_blog?fields[node-- vactory_blog]=path,title,field_blog_category,field_blog_tags,field_vactory_media&fields[taxonomy_term--vactory_blog_categories]=tid,name&fields[taxonomy_term--vactory_blog_tags]=tid,name&include=field_blog_category&page[offset]=${
          props?.paginationObj.OFFSET || 0
        }&page[limit]=${
          props?.paginationObj.LIMIT || 9
        }&sort=-created&filter[status][value]=1&filter[theme][condition][path]=field_blog_category.drupal_internal__tid&filter[theme][condition][operator]==&filter[theme][condition][value]=60
          `
      );
      const data = await response.json();
      return data;
    } else if (props.categoryType == "categorie 2") {
      response = await fetch(
        `http://localhost:8080/en/api/node/vactory_blog?fields[node-- vactory_blog]=path,title,field_blog_category,field_blog_tags,field_vactory_media&fields[taxonomy_term--vactory_blog_categories]=tid,name&fields[taxonomy_term--vactory_blog_tags]=tid,name&include=field_blog_category&page[offset]=${
          props?.paginationObj.OFFSET || 0
        }&page[limit]=${
          props?.paginationObj.LIMIT || 9
        }&sort=-created&filter[status][value]=1&filter[theme][condition][path]=field_blog_category.drupal_internal__tid&filter[theme][condition][operator]==&filter[theme][condition][value]=61
          `
      );
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(
        `http://localhost:8080/en/api/node/vactory_blog?fields[node-- vactory_blog]=path,title,field_blog_category,field_blog_tags,field_vactory_media&fields[taxonomy_term--vactory_blog_categories]=tid,name&fields[taxonomy_term--vactory_blog_tags]=tid,name&include=field_blog_category&page[offset]=${
          props?.paginationObj.OFFSET || 0
        }&page[limit]=${
          props?.paginationObj.LIMIT || 9
        }&sort=-created&filter[status][value]=1`
      );
  
      const blogs = await response.json();
      return blogs;
    }
  }
  
  export default getBlogByCategorie;
  