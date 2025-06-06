import { useState } from "react";
import { useDecants } from "../context/DecantContext";

function DecantForm() {
    const [decantName, setDecantName] = useState('');
    const [decantDescription, setDecantDescription] = useState('');
    const [decantPath, setDecantPath] = useState('');
    const [decantGender, setDecantGender] = useState('');
    const [decantBrand, setDecantBrand] = useState('');
    const [decantConcentration, setDecantConcentration] = useState('');
    const [decantSize, setDecantSize] = useState('');
    const [decantSizeTwo, setDecantSizeTwo] = useState('');
    const [decantSizeThree, setDecantSizeThree] = useState('');
    const [decantPrice, setDecantPrice] = useState('');
    const [decantPriceTwo, setDecantPriceTwo] = useState('');
    const [decantPriceThree, setDecantPriceThree] = useState('');
    const [decantImage, setDecantImage] = useState('');
    const [decantImageTwo, setDecantImageTwo] = useState('');
    const [decantImageThree, setDecantImageThree] = useState('');

    const { createDecant, addingDecant } = useDecants()

    const handleSubmit = async e => {
        e.preventDefault();
        createDecant(decantName, decantDescription, decantPath, decantGender, decantBrand, decantConcentration, decantSize, decantSizeTwo, decantSizeThree, decantPrice, decantPriceTwo, decantPriceThree, decantImage, decantImageTwo, decantImageThree);
        setDecantName('')
        setDecantDescription('')
        setDecantPath('')
        setDecantGender('')
        setDecantBrand('')
        setDecantConcentration('')
        setDecantSize('')
        setDecantSizeTwo('')
        setDecantSizeThree('')
        setDecantPrice('')
        setDecantPriceTwo('')
        setDecantPriceThree('')
        setDecantImage('')
        setDecantImageTwo('')
        setDecantImageThree('')
    }

    const generatePath = (name) => {
        return name
            .toLowerCase()
            .normalize("NFD") // Descompone caracteres como "é" en "e" + diacrítico
            .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos
            .replace(/[^a-z0-9]+/g, '-') // Reemplaza cualquier carácter no deseado con "-"
            .replace(/(^-|-$)/g, ''); // Elimina los guiones al inicio o al final
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setDecantName(name);
        setDecantPath(generatePath(name))
    };

    return (
        <section className="w-full border-b border-black pb-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-5 sm:gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 sm:gap-5 justify-center">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 sm:gap-x-5 text-sm sm:text-base">
                            <label className="flex flex-col gap-2 items-start w-full font-medium">Nombre
                                <input
                                    className="border p-2 rounded-lg w-full outline-none focus:border-green-600 border-gray-200 font-normal"
                                    type="text"
                                    name="perfumename"
                                    placeholder="Nombre de perfume"
                                    onChange={handleNameChange}
                                    value={decantName}
                                    required
                                />
                            </label>

                            <label className="flex flex-col gap-2 items-start w-full font-medium">Path
                                <input
                                    className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                    type="text"
                                    name="perfumepath"
                                    placeholder="Path de perfume"
                                    value={decantPath}
                                    disabled
                                    required
                                />
                            </label>

                            <div className="flex w-full gap-2 sm:gap-5 order-1 lg:order-0">

                                <label className="flex flex-col gap-2 items-start w-full  font-medium">Género
                                    <select
                                        className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                        name="perfumegender"
                                        onChange={(e) => setDecantGender(e.target.value)} value={decantGender} required
                                    >
                                        <option value="" disabled>Género</option>
                                        <option value="Hombre">Hombre</option>
                                        <option value="Mujer">Mujer</option>
                                        <option value="Unisex">Unisex</option>
                                    </select>
                                </label>
                            </div>
                            <label className="flex flex-col gap-2 items-start w-full font-medium order-1 lg:order-none">Marca
                                <select
                                    className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                    name="perfumebrand"
                                    onChange={(e) => setDecantBrand(e.target.value)}
                                    value={decantBrand} required
                                >
                                    <option value="" disabled>Selecciona marca</option>
                                    <option value="Abercrombie & Fitch">Abercrombie & Fitch</option>
                                    <option value="Adolfo Dominguez">Adolfo Dominguez</option>
                                    <option value="Azzaro">Azzaro</option>
                                    <option value="Bobbi Brown">Bobbi Brown</option>
                                    <option value="Boss">Boss</option>
                                    <option value="Burberry">Burberry</option>
                                    <option value="Cacharel">Cacharel</option>
                                    <option value="Calvin Klein">Calvin Klein</option>
                                    <option value="Cala">Cala</option>
                                    <option value="Carolina Herrera">Carolina Herrera</option>
                                    <option value="Cartier">Cartier</option>
                                    <option value="Chanel">Chanel</option>
                                    <option value="Clinique">Clinique</option>
                                    <option value="Covergirl">Covergirl</option>
                                    <option value="Creed">Creed</option>
                                    <option value="Cross">Cross</option>
                                    <option value="Davidoff">Davidoff</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Dior">Dior</option>
                                    <option value="Dkny">Dkny</option>
                                    <option value="Dolce & Gabbana">Dolce & Gabbana</option>
                                    <option value="Elie Saab">Elie Saab</option>
                                    <option value="Elizabeth Arden">Elizabeth Arden</option>
                                    <option value="Estee Lauder">Estee Lauder</option>
                                    <option value="Ferragamo">Ferragamo</option>
                                    <option value="Fila">Fila</option>
                                    <option value="Giorgio Armani">Giorgio Armani</option>
                                    <option value="Givenchy">Givenchy</option>
                                    <option value="Gucci">Gucci</option>
                                    <option value="Guess">Guess</option>
                                    <option value="Guerlain">Guerlain</option>
                                    <option value="Guy Laronche">Guy Laronche</option>
                                    <option value="Hollister">Hollister</option>
                                    <option value="Ilumínate">Ilumínate</option>
                                    <option value="Issey Miyake">Issey Miyake</option>
                                    <option value="Jean Paul Gaultier">Jean Paul Gaultier</option>
                                    <option value="Jeanne Arthes">Jeanne Arthes</option>
                                    <option value="Kenzo">Kenzo</option>
                                    <option value="La Prairie">La Prairie</option>
                                    <option value="Lacoste">Lacoste</option>
                                    <option value="Lancome">Lancome</option>
                                    <option value="Lilash">Lilash</option>
                                    <option value="Loewe">Loewe</option>
                                    <option value="L'Oréal">L'Oréal</option>
                                    <option value="MAC">MAC</option>
                                    <option value="Majorica">Majorica</option>
                                    <option value="Marc Jacobs">Marc Jacobs</option>
                                    <option value="Max Factor">Max Factor</option>
                                    <option value="Memo">Memo</option>
                                    <option value="Michael Kors">Michael Kors</option>
                                    <option value="Moschino">Moschino</option>
                                    <option value="Mugler">Mugler</option>
                                    <option value="Narciso Rodriguez">Narciso Rodriguez</option>
                                    <option value="Nina Ricci">Nina Ricci</option>
                                    <option value="Oscar de la Renta">Oscar de la Renta</option>
                                    <option value="Paco Rabanne">Paco Rabanne</option>
                                    <option value="Ralph Lauren">Ralph Lauren</option>
                                    <option value="Scalpers">Scalpers</option>
                                    <option value="Ted Lapidus">Ted Lapidus</option>
                                    <option value="Tom Ford">Tom Ford</option>
                                    <option value="Tommy Hilfiger">Tommy Hilfiger</option>
                                    <option value="TOUS">TOUS</option>
                                    <option value="Uric de Varens">Uric de Varens</option>
                                    <option value="Versace">Versace</option>
                                    <option value="victorinox">victorinox</option>
                                    <option value="Viktor & Rolf">Viktor & Rolf</option>
                                    <option value="Yves Saint Laurent">Yves Saint Laurent</option>
                                </select>
                            </label>
                            <label className="flex flex-col gap-2 items-start w-full font-medium"> Concentración
                                <input
                                    className="border p-2 rounded-lg w-full outline-none focus:border-green-600 border-gray-200 font-normal"
                                    type="text"
                                    name="perfumeconcentration"
                                    placeholder="Concentración de perfume"
                                    onChange={(e) => setDecantConcentration(e.target.value)} value={decantConcentration} required
                                />
                            </label>
                            <div className="grid grid-cols-2 w-full gap-2 sm:gap-5 order-3 text-xs sm:text-base">

                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Tamaño 1
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumesize" placeholder="Tamaño" onChange={(e) => setDecantSize(e.target.value)} value={decantSize} min="0" max="500" required />
                                </label>
                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Precio 1
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumeprice" placeholder="Precio" onChange={(e) => setDecantPrice(e.target.value)} value={decantPrice} min="0" max="3000" required />
                                </label>
                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Tamaño 2
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumesize" placeholder="Tamaño" onChange={(e) => setDecantSizeTwo(e.target.value)} value={decantSizeTwo} min="0" max="500" required />
                                </label>
                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Precio 2
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumeprice" placeholder="Precio" onChange={(e) => setDecantPriceTwo(e.target.value)} value={decantPriceTwo} min="0" max="3000" required />
                                </label>
                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Tamaño 3
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumesize" placeholder="Tamaño" onChange={(e) => setDecantSizeThree(e.target.value)} value={decantSizeThree} min="0" max="500" required />
                                </label>
                                <label className="flex flex-col gap-2 items-start w-full  font-medium"> Precio 3
                                    <input className="border border-gray-200 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal" type="number" name="perfumeprice" placeholder="Precio" onChange={(e) => setDecantPriceThree(e.target.value)} value={decantPriceThree} min="0" max="3000" required />
                                </label>
                            </div>

                        </div>
                        <div className="row-span-8 md:row-span-1 col-start-1 md:col-start-2 text-sm sm:text-base">
                            <label className="flex flex-col gap-2 items-start w-full h-full font-medium"> Descripción
                                <textarea className="border border-gray-200 p-2 rounded-lg w-full resize-none h-full  outline-none focus:border-green-600 font-normal" type="text" name="perfumedescription" placeholder="Descripción de perfume" onChange={(e) => setDecantDescription(e.target.value)} value={decantDescription} required></textarea>
                            </label>
                        </div>
                    </div>
                    <section className="flex flex-col gap-5 mt-3 text-sm sm:text-base">
                        <h3 className="text-xl uppercase font-semibold">Imágenes</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
                            <div className="flex flex-col gap-2">
                                <label className="flex flex-col gap-2 items-start w-full font-medium">
                                    Imagen principal
                                    <input
                                        className="border border-gray-100 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                        type="text"
                                        name="perfumeimage"
                                        placeholder="Imagen principal de perfume"
                                        onChange={(e) => setDecantImage(e.target.value)}
                                        value={decantImage}
                                        required
                                    />
                                </label>

                                {decantImage && (
                                    <img
                                        src={decantImage}
                                        alt={`Imagen principal de ${decantName}`}
                                        className="w-full h-auto aspect-square object-cover rounded-lg"
                                    />
                                )}
                            </div>


                            <div className="flex flex-col gap-2">
                                <label className="flex flex-col gap-2 items-start w-full font-medium">
                                    Segunda imagen
                                    <input
                                        className="border border-gray-100 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                        type="text"
                                        name="perfumeimage"
                                        placeholder="Segunda imagen"
                                        onChange={(e) => setDecantImageTwo(e.target.value)}
                                        value={decantImageTwo}
                                        required
                                    />
                                </label>

                                {decantImageTwo && (
                                    <img
                                        src={decantImageTwo}
                                        alt={`Segunda imagen de $decanteName}`}
                                        className="w-full h-auto aspect-square object-cover rounded-lg"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="flex flex-col gap-2 items-start w-full font-medium">
                                    Tercera imagen
                                    <input
                                        className="border border-gray-100 p-2 rounded-lg w-full outline-none focus:border-green-600 font-normal"
                                        type="text" Three name="perfumeimage"
                                        placeholder="Tercera imagen"
                                        onChange={(e) => setDecantImageThree(e.target.value)}
                                        value={decantImageThree}
                                        required
                                    />
                                </label>

                                {decantImageThree && (
                                    <img
                                        src={decantImageThree}
                                        alt={`Tercera imagen de ${decantName}`}
                                        className="w-full h-auto aspect-square object-cover rounded-lg"
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                </div>
                <button disabled={addingDecant} className="bg-green-500 rounded-lg w-fit py-2 px-5 self-center mt-4 font-bold hover:scale-95 uppercase transition-transform text-white shadow-sm hover:bg-white border hover:border-green-500 hover:text-green-500">
                    {addingDecant ? "Agregando..." : "Agregar"}
                </button>
            </form>
        </section>
    );
}

export default DecantForm;