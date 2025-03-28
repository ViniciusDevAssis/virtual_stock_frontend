import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Obtém o token dos cookies

  // Se o usuário já estiver autenticado, redireciona para /products
  if (token) {
    return NextResponse.redirect(new URL("/products", req.url));
  }

  return NextResponse.next(); // Continua a requisição normalmente
}

// Define as rotas que o middleware deve afetar
export const config = {
  matcher: ["/auth/login", "/auth/register"], // Aplica o middleware nessas páginas
};
