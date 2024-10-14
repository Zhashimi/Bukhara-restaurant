import { useLoaderData, useNavigation } from "react-router-dom";
import axios from "axios";
import MenuList from "./MenuList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const mealSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchMealQuery = (searchTerm) => {
  return {
    queryKey: [searchTerm || " "],
    queryFn: async () => {
      const response = await axios.get(`${mealSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("searchTerm") || " ";
    await queryClient.ensureQueryData(searchMealQuery(searchTerm));
    return { searchTerm };
  };
const Menu = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state;
  const { searchTerm } = useLoaderData();
  const { data: meals, isLoading: loading } = useQuery(
    searchMealQuery(searchTerm)
  );

  return (
    <>
      {isLoading === "loading" || loading ? (
        <div className="loading" />
      ) : (
        <>
          <SearchForm searchTerm={searchTerm} />
          <MenuList meals={meals} />
        </>
      )}
    </>
  );
};

export default Menu;
