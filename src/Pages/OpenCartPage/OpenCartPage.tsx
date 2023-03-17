import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

import { StyledLink } from '../../components/NavLink';
import { useOpenCart } from '../../composables/useOpenCart';
import { Container, LinkContainer } from './OpenCartPage.styles';

export const OpenCartPage = () => {
  const { openedCart } = useOpenCart();

  const series = [
    {
      name: 'Price',
      data: [
        ...openedCart.products.map((product) => {
          return parseFloat(product.price.toFixed(1));
        }),
      ],
    },
    {
      name: 'Discounted Price',
      data: [
        ...openedCart.products.map((product) => {
          return parseFloat((product.discountedPrice / product.quantity).toFixed(1));
        }),
      ],
    },
  ];
  const options: ApexOptions = {
    chart: {
      id: 'line-chart',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: [
        ...openedCart.products.map((product) => {
          return product.title;
        }),
      ],
      labels: {
        trim: true,
      },
    },
  };

  return (
    <Container>
      {openedCart.id !== 0 ? (
        <>
          <h3>Cart {openedCart.id}</h3>
          <ReactApexChart options={options} series={series} type="line" height="300" />
        </>
      ) : (
        <div>You need to choose a cart</div>
      )}
      <LinkContainer>
        <StyledLink to={'/'}>Back to carts</StyledLink>
      </LinkContainer>
    </Container>
  );
};
