import { useState } from "react";

function ContactForm() {

const [cep, setCep] = useState() 

  function verificarCEP() {

  }

  return (
    <form className="p-6 bg-white rounded-lg shadow-md bg font-Poppins">
      <div className="mb-4">
        <input type="text" id="name" name="name" placeholder="Nome Completo:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <input type="email" id="email" name="email" placeholder="E-mail:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <input type="tel" id="phone" name="phone" placeholder="Telefone:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <input type="text" id="cep" name="cep" placeholder="CEP:" required onChange={verificarCEP} className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <input type="text" id="city" name="city" placeholder="Cidade:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <input type="text" id="street" name="street" placeholder="Rua:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="4" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-default-white text-white font-semibold rounded-md p-2 hover:bg-secondary-700">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;