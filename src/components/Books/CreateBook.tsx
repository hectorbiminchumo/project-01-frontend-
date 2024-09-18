// ./new-client/src/components/Guitars/Create.js

import React, { useState, useContext } from 'react'
import BookContext from '../../context/Book/BookContext'


export default function Create() {

	// 1. ESTADO GLOBAL
	const ctx = useContext(BookContext)
	const {
		createBook
	} = ctx


    


	// 2. ESTADO LOCAL
	const [newBook, setNewBook] = useState({
		title: "",
		author: "",
		description: "",
		price: "",
		image: "",
		condition: "",
		pages: ""
	})


	// 3. FUNCIONES
	const handleChange = (e) => {
		e.preventDefault()

		setNewBook({
			...newBook,
			[e.target.name]: e.target.value
		})		
	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		createBook(newBook)

	}


	return (
		<>
			<form onSubmit={ (event) => { handleSubmit(event) } }>
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="title"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Author</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="author"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Description</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="description"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Price (USD)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="price" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
                            <div class="col-span-6 sm:col-span-4">
								<label for="country" class="block text-sm font-medium text-gray-700">Condition</label>
								<select 
									onChange={ (event) => { handleChange(event) } } 
									name="condition"
									class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
									<option value={""}>
										---
									</option>
									<option value={"New"}>
										New
									</option>
									<option value={"Used"}>Used</option>
								</select>
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="email-address" class="block text-sm font-medium text-gray-700">Image</label>
								<input 
									type="text" 
									name="image" 
									onChange={ (event) => { handleChange(event) } } 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							
							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Pages</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="pages" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Save
						</button>
						
					</div>
				</div>
			</form>
		</>
	)
}