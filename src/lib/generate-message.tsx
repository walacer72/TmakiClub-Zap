    import { useCartStore } from "@/stores/cart-stores";
    import { useCheckoutStore } from "@/stores/checkout-store";

    export const GenereteMessage = () => {

        const { personData, address } = useCheckoutStore(state => state);
        const { cart } = useCartStore(state => state);

        let orderProduct = [];
        let subTotal = 0;

        for (let i of cart) {
            orderProduct.push(`${i.quantity} x ${i.product.name}  ${i.obs ? `// "${i.obs}"`: ``} = R$ ${i.product.price * i.quantity}`)
            subTotal += i.quantity * i.product.price;
        }   


        return `**Dados do cliente:**
    Nome: ${personData.name}, Tel: ${personData.tel}, E-mail: ${personData.email}
    ------------------------
    **Endereço**    
    Rua: ${address.street}, Nº ${address.number}, Complemento: ${address.complement},
    Bairro: ${address.district}, Cidade: ${address.city}, Cidade: ${address.city} e
    CEP: ${address.zipCode}
    ------------------------
    **Pedido**
    ${orderProduct.join('\n')}
    ------------------------
    **SubTotal**
    Total = R$ ${subTotal.toFixed(2)}
    `;
    }