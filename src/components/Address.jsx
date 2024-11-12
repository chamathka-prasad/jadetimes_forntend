const Address = ({ className, address }) => {
  return (
    <address className={className}>
      <div className="font-semibold">{address.agent}</div>
      <div>{address.street}</div>
      <div>{address.landline}</div>
      <div>{address.fax}</div>
    </address>
  );
};

export default Address;