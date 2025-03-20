import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "3s2yhkjdoo54",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        url: item.fields.url,
        img: item.fields.image.fields.file.url,
      }));
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
