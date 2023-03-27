import React from "react";
import Header from "../../components/header.js";

import Catalogo from "../catalogo/catalogo.js";

export default function AuditoriaPosts() {
    return (
        <div>
            <Header/>
            <Catalogo main={false} auditoria={true}/>
        </div>
    )
}