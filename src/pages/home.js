import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Unis: Manage Your Construction Company in One Place</title>
      </Helmet>

      <HomeView />
    </>
  );
}
