const Address = ({ address }) => {
  return (
    <address>
      <div className="font-semibold mb-2">{address.agent}</div>
      <div>{address.street}</div>
      <div>{address.landline}</div>
      <div>{address.fax}</div>
    </address>
  );
};

export default Address;
