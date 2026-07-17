# 🚀 SupportRAG

**SupportRAG** is a backend-only AI-powered **Retrieval-Augmented Generation (RAG)** application designed to help users interact with their own knowledge base. Instead of relying only on an AI model's pre-trained knowledge, SupportRAG retrieves relevant information from uploaded documents and uses that context to generate accurate, reliable, and context-aware responses.

The primary goal of this project is to understand and implement the complete RAG pipeline from scratch using **Node.js**, **Express.js**, **LangChain**, and a **Vector Database (ChromaDB)**. It is built as a learning-focused yet production-inspired backend project that demonstrates how modern AI applications process documents, generate embeddings, perform semantic search, and produce intelligent answers using Large Language Models (LLMs).

## 🎯 Project Objective

The objective of SupportRAG is to build an intelligent support assistant capable of understanding documentation, manuals, troubleshooting guides, APIs, and knowledge-base articles. Users can upload documents, and the system automatically processes them, converts them into vector embeddings, stores them in a vector database, and retrieves the most relevant information whenever a question is asked.

For example, if a user uploads an authentication guide and later asks:

> "Login is not working."

SupportRAG will search the uploaded documentation, retrieve the most relevant sections related to authentication or login issues, and provide an answer based only on that context instead of generating a generic response.

## ✨ Key Features

* 📄 Upload documents such as PDF, TXT, and Markdown files.
* ✂️ Automatically split large documents into smaller chunks for efficient processing.
* 🧠 Generate vector embeddings using an embedding model.
* 🗄️ Store embeddings in a ChromaDB vector database.
* 🔍 Perform semantic similarity search to retrieve the most relevant document sections.
* 🤖 Generate context-aware answers using a Large Language Model (LLM).
* 📡 RESTful backend APIs tested using Postman.
* 🏗️ Clean and scalable backend architecture following industry best practices.

## 🎓 Learning Goals

This project is designed to provide a deep understanding of:

* Backend development with Node.js and Express.js
* Retrieval-Augmented Generation (RAG)
* Vector Databases
* Embeddings
* Semantic Search
* LangChain
* ChromaDB
* AI-powered backend architecture
* Document processing and retrieval workflows

SupportRAG is more than just a chatbot. It is a complete learning project that demonstrates how modern AI systems retrieve relevant knowledge before generating responses, making them more accurate, explainable, and useful for real-world applications.
