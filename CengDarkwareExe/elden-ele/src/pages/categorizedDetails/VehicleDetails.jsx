import styled from "styled-components";

function VehicleDetails({
  marka,
  seri,
  model,
  yil,
  vites,
  agirhasarkayit,
  kasatipi,
  motorgucu,
  motorhacmi,
  renk,
  durumu,
  garanti,
}) {
  return (
    <>
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Marka</b>
        <p>{marka}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Seri</b>
        <p>{seri}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Model</b>
        <p>{model}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Yıl</b>
        <p>{yil}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Vites</b>
        <p>{vites}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Araç Durumu</b>
        <p>{durumu}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Kasa Tipi</b>
        <p>{kasatipi}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Motor Gücü</b>
        <p>{motorgucu}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Ağır Hasar Kaydı</b>
        <p>{agirhasarkayit}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Motor Hacmi</b>
        <p>{motorhacmi}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Renk</b>
        <p>{renk}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Garanti</b>
        <p>{garanti}</p>
      </div>
    </>
  );
}
const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  padding: 2px 0;
`;

export default VehicleDetails;