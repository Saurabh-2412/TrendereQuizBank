import React from "react";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="container">
      <div className="px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center"><i className="material-icons text-2xl md:text-3xl font-bold mr-2">&#xe8e5;</i>{title}</h1>
      </div>
    </header>
  );
}
