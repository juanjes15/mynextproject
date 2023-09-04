import Link from "next/link";

export const metadata = {
    title: "Tienda principal",
}

export default function TiendaLayout({ children }) {
    return (
        <>
            <nav>
                <h3>Sección Tienda</h3>
                <ul>
                    <li>
                        <Link href="/tienda/categorias">Categorías</Link>
                    </li>
                    <li>
                        <Link href="/tienda/categorias/computadoras">Computadoras</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}