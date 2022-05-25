import { client, checkError } from './client';

export async function fetchBooks() {
  const resp = await client.from('books').select('*');
  return checkError(resp);
}

export async function fetchBooksById(id) {
  const resp = await client.from('books').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createBook(book) {
  console.log('book to create: ', book);
  const resp = await client.from('books').insert(book).single();
  return checkError(resp);
}

export async function deleteBook(id) {
  const resp = await client.from('books').delete(id).match({ id }).single();
  return checkError(resp);
}

export async function updateBook(book) {
  const resp = await client
    .from('books')
    .update(book)
    .match({ id: book.id })
    .single();
  return checkError(resp);
}
