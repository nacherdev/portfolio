import React from 'react';

export interface CardOptions {
    titulo: string;
    img: string;
    descripcion: string;
}

export default function Card({ titulo, img, descripcion }: CardOptions) {
    return(
        <div className="w-[600px] h-[400px] mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col items-center text-white
        ">
            
            <div className="flex justify-center items-center gap-5 mb-4">
                <h3 className="text-3xl font-extrabold">{titulo}</h3>
                <img 
                    className="w-20 h-20 rounded-full object-cover shadow-lg" 
                    src={img} 
                    alt={`Imagen de ${titulo}`} 
                />
            </div>
            
            <p className="text-lg text-center">
                <span className="font-bold block mb-1">Descripción:</span> 
                {descripcion}
            </p>
            
        </div>
    )
}