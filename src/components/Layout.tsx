import React from 'react';
import Logo from './Logo';
import { Link, graphql, useStaticQuery } from 'gatsby';

type LayoutProps = {
  children: React.ReactNode;
};

interface INavBar {
  name: string;
  slug: string;
  childrenContentfulNavBarContentfulchildrenJsonNode: {
    name: string;
    slug: string;
  }[];
}
export default function Layout({ children }: LayoutProps) {
  const {
    allContentfulNavBar,
  }: {
    allContentfulNavBar: {
      nodes: INavBar[];
    };
  } = useStaticQuery(graphql`
    query {
      allContentfulNavBar {
        nodes {
          name
          slug
          childrenContentfulNavBarContentfulchildrenJsonNode {
            name
            slug
          }
        }
      }
    }
  `);

  return (
    <div className="">
      <header className="bg-white flex items-center h-[80px] border border-transparent relative z-50">
        <div className="w-[40%] mx-auto">
          <Logo />
        </div>
        <div className="flex w-[60%] h-full">
          {/* {allContentfulNavBar.nodes.map(({ name.childrenContentfulNavBarContentfulchildrenJsonNode }:INavBar)=>{

                    })} */}
          <ul className="flex items-center font-semibold space-x-[92px] mr-32">
            {allContentfulNavBar.nodes.map(
              (
                {
                  name,
                  childrenContentfulNavBarContentfulchildrenJsonNode,
                }: INavBar,
                index,
              ) => {
                if (
                  childrenContentfulNavBarContentfulchildrenJsonNode.length > 0
                ) {
                  return (
                    <li className="group  menu-btn" key={index}>
                      {name} <span className="arrow"></span>
                      <ul className="bg-white absolute h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 shadow-lg w-44 pl-6 top-[79px] transition-opacity delay-75 ease-in-out left-[-37px]">
                        {childrenContentfulNavBarContentfulchildrenJsonNode.length >
                          0 &&
                          childrenContentfulNavBarContentfulchildrenJsonNode.map(
                            ({ name }, i) => (
                              <li className="h-8" key={i}>
                                <Link to={`#`}>{name}</Link>
                              </li>
                            ),
                          )}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li className="menu-btn" key={index}>
                      <Link to={`#`}>{name}</Link>
                    </li>
                  );
                }
              },
            )}
            {/* <li className='group  menu-btn'>
                            Recipe box <span className="arrow"></span>
                            <ul className="bg-white absolute h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 shadow-lg w-44 pl-6 top-[79px] transition-opacity delay-75 ease-in-out left-[-37px]">
                                <li className='h-8'><Link to="#" >Vegan</Link></li>
                                <li className='h-8'><Link to="#">Family</Link></li>
                                <li className='h-8'><Link to="#">All</Link></li>
                            </ul>
                        </li>
                        <li className='group menu-btn'>Products<span className="arrow"></span>
                            <ul className="bg-white border  absolute h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 shadow-lg w-44 pl-6 top-[79px] transition-opacity delay-75 ease-in-out left-[-37px]">
                                <li className='h-8'><Link to="#" >Fruit</Link></li>
                                <li className='h-8'><Link to="#">Vegetable</Link></li>
                                <li className='h-8'><Link to="#">Eggs</Link></li>
                                <li className='h-8'><Link to="#">Milk</Link></li>
                                <li className='h-8'><Link to="#">Meat</Link></li>
                                <li className='h-8'><Link to="#">Fresh drinks</Link></li>
                            </ul>
                        </li>
                        <li className='menu-btn'>About us</li>
                        <li className='menu-btn'>Visit us</li> */}
          </ul>
          <div className="space-x-11 items-center flex">
            <button className="">Log in</button>
            <button className="border border-accent h-[35px] w-[124px] font-thin text-[10px]">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
