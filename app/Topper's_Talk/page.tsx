import { title } from "@/components/primitives";

export default function PricingPage() {
  const text = `Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
  amet, consectetur, adipisci velit..." "There is no one who loves pain
  itself, who seeks after it and wants to have it, simply because it is
  pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
  dignissim velit in auctor scelerisque. Mauris ullamcorper, quam at
  convallis faucibus, magna augue commodo urna, id volutpat tellus ante
  quis ligula. Nullam et venenatis felis, non ullamcorper sem. Ut pharetra
  posuere nisi eget laoreet. Orci varius natoque penatibus et magnis dis
  parturient montes, nascetur ridiculus mus. Proin venenatis odio mi, in
  pellentesque ligula condimentum ut. Cras quis lorem enim. Orci varius
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus
  mus. Vestibulum suscipit purus eleifend nibh rhoncus elementum.
  Suspendisse magna tortor, luctus vitae tristique sed, lacinia eu quam.
  Suspendisse ac eleifend turpis. In vitae ex suscipit, vulputate mauris
  sed, bibendum ipsum. Nulla facilisi. Mauris pharetra urna at quam
  condimentum aliquam. Integer pulvinar fringilla lectus ut interdum.
  Aenean ut nibh faucibus, bibendum tellus at, posuere nunc. Fusce iaculis
  augue a dolor molestie luctus et quis velit. Ut a vestibulum leo. Sed
  ullamcorper blandit nisi vitae placerat. Duis convallis augue eget
  aliquet porta. Aenean lorem magna, tempor tincidunt mauris id, tempor
  tincidunt nunc. Nullam in lorem volutpat, venenatis velit pulvinar,
  tempus nunc. Maecenas nec sagittis magna, a pellentesque ligula.
  Suspendisse varius metus velit. Nullam interdum feugiat risus, in
  commodo turpis dapibus ut. Etiam sodales et nisi viverra dictum. Duis
  nisi felis, luctus eget tellus nec, tristique aliquet tellus. Praesent
  quis mollis nisl. In interdum dui orci, condimentum mollis velit sodales
  ut. Phasellus id nulla luctus, pretium odio nec, finibus nibh. Vivamus
  ligula tellus, tempor vel massa nec, pretium imperdiet magna. Nulla
  convallis nulla a mollis ultrices. Nulla facilisi. Morbi id enim at
  risus condimentum facilisis eget ut turpis. Donec mattis risus in tellus
  tincidunt, non ornare ligula euismod. Mauris tristique arcu sit amet
  neque eleifend pellentesque. Proin consectetur massa ac est pharetra
  tempor. Quisque mollis, nisl at interdum commodo, turpis magna convallis
  leo, non molestie eros tortor vel est. Curabitur vehicula lectus eget mi
  porta, venenatis feugiat sem semper. Praesent iaculis erat odio, sit
  amet laoreet libero feugiat eu. Suspendisse fringilla ligula libero, eu
  malesuada velit convallis nec. Vestibulum hendrerit arcu justo, ut
  mattis neque rutrum a. Morbi malesuada turpis turpis, eget ultricies
  neque venenatis quis. Aenean vel egestas nulla. Sed ullamcorper finibus
  placerat. Mauris imperdiet blandit arcu, eu placerat sem convallis
  malesuada. Aliquam vitae cursus metus, eget lacinia arcu. Mauris ornare
  dapibus maximus. Etiam sit amet arcu id lacus dignissim tristique.
  Praesent lorem velit, ornare sit amet ornare non, mollis quis enim.
  Nullam dapibus quam at lorem molestie facilisis. Maecenas sit amet
  sapien id dui aliquet placerat. Etiam dictum nulla id pretium efficitur.
  Maecenas venenatis pulvinar felis, quis euismod elit tincidunt in. Ut
  nec nibh lacinia, ornare ex sed, malesuada lorem. In ex dui, elementum
  in felis a, feugiat bibendum leo. Nulla eu feugiat magna. Nullam
  suscipit nisl ut purus consequat sagittis. Sed venenatis at mauris a
  lobortis. Suspendisse tempor sapien in sapien consequat lacinia. Nunc
  non justo quis leo finibus faucibus. Vivamus eleifend vehicula tellus id
  vulputate. Vestibulum eu ex vulputate, efficitur nisi eu, egestas dolor.`;

  return (
    <div className="container">
      <div className="text-center">
        <h1 className={title()}>Topper's Talk</h1>
      </div>
      <p className="mt-5 text-wrap">{text}</p>
    </div>
  );
}
