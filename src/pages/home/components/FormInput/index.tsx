import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormType = z.infer<typeof searchFormSchema>

interface PostsProps {
  postsAmount: number;
  getPosts: (query: string) => Promise<void>;
}

export function FormInput({ postsAmount, getPosts }: PostsProps) {

  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchPost(data: SearchFormType) {
    await getPosts(data.query);
  }

  return (
    <FormContainer>
      <div>
        <h2>Publicações</h2>
        <p>{postsAmount} publicações</p>
      </div>
      <Form onSubmit={handleSubmit(handleSearchPost)}>
        <input 
          type="text"
          placeholder="Buscar conteúdo" 
          {...register("query")}
        />
      </Form>
    </FormContainer>
  );
}