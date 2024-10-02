'use client';

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps{
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC <CategoryBoxProps> = ({
    icon: Icon , label, selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(()=>{
        let currentQuery = {};

        if(params){
            currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery : any = {
            ...currentQuery,
            category: label
        }

        // check the category is already selected, if so then delete the updated query

        if(params?.get('category') === label){
            delete updatedQuery.category;
        }

        // after that generate the url string and pass the manipulated queries above

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true});

        router.push(url)
    }, [label, params, router])

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${selected ? 'border-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}>
            <Icon size={26} />
            <div className="text-sm font-medium">
            {label}
            </div>
        </div>
    );
};

export default CategoryBox;