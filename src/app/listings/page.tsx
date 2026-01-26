import { Suspense } from "react";
import ListingsClient from '../../components/ListingsClient';

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsClient />
    </Suspense>
  );
}
