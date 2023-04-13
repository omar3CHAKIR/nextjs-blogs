"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

import getBlogByCategorie from "../../../../utils/getBlogsByCategories";
import getCategories from "../../../../utils/getCategories";

import Pagination from "@/components/Pagination";
import Filter from "@/components/Filter";
import Blogs from "@/components/Blogs";


const blogs = (props) => {
  console.log(props);
  let blogsList;
  const categoryType = props?.searchParams?.category || "all";
  console.log(categoryType);
  const router = useRouter();

  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const LIMIT = 10;
  const OFFSET = (currentPage - 1) * LIMIT;
  const paginationObj = {
    LIMIT,
    OFFSET,
  };

  const getSelectedValue = async (e) => {
   // categoryType = e.target.value;
    router.push(`http://localhost:3000/en/blogs?category=${e.target.value}`, undefined, { shallow: true });

    // const newUrl = `http://localhost:3000/en/blogs?category=${e.target.value}`
    // window.history.replaceState({ ...window.history.state , as : newUrl , url : newUrl} , '' , newUrl)
  };

  const fetchSelectedValue = async (value) => {
    // categoryType = value;
    const data = await getBlogByCategorie({ categoryType, paginationObj });
    setBlogs(data);
  };

  useEffect(() => {
    const categoriesFetcher = async () => {
      return getCategories(paginationObj);
    };
    const blogsFetcher = async () => {
      return getBlogByCategorie({ categoryType, paginationObj });
    };

    const fetchBoth = async () => {
      const categs = await categoriesFetcher();
      blogsList = await blogsFetcher();
      setBlogs(blogsList);
      setFilter(categs);
      setLoading(false);
    };
    fetchBoth();
  }, [currentPage]);

  // const nextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const prevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {loading ? (
        <>loading ...</>
      ) : (
        <>
          <Filter
            filter={filter}
            getSelectedValue={getSelectedValue}
            fetchSelectedValue={fetchSelectedValue}
          />
          <Blogs blogs={blogs} />
          {/* <button onClick={nextPage}> next </button>
          {"      "}
          <button onClick={prevPage} disabled={currentPage === 1}>
            previous
          </button> */}
          <Pagination blogsPerPage={2} totalBlogs={LIMIT} paginate={paginate} />
        </>
      )}
    </>
  );
};

export default blogs;
