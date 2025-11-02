import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
function Aerocode() {

  return (
    <>
      <div className="">
        <Tabs defaultValue="Aeronave">
          <TabsList>
            <TabsTrigger value="Aeronave">Aeronave</TabsTrigger>
            <TabsTrigger value="Etapa">Etapa</TabsTrigger>
            <TabsTrigger value="EditEtapa">Editar Etapa</TabsTrigger>
            <TabsTrigger value="Peca">Peça</TabsTrigger>
            <TabsTrigger value="Teste">Teste</TabsTrigger>
          </TabsList>
          <TabsContent value="Aeronave">
             <motion.div
                key="info"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden p-4 border rounded-lg bg-card shadow-sm"
              >
            <Card>
              <CardHeader>
                <CardTitle>Aeronaves</CardTitle>
                <CardDescription>
                  Escoha sua aeronave.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-username">Escolher Aeronave</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Aeronavess" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Aeronave</SelectLabel>
                        <SelectItem value="aeronave1">Aeronave 1</SelectItem>
                        <SelectItem value="aeronave2">Aeronave 2</SelectItem>
                        <SelectItem value="aeronave3">Aeronave 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Selecionar</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-name">Criar Aeronave</Label>
                  <Input id="tabs-demo-name" placeholder="Codigo" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Modelo</SelectLabel>
                        <SelectItem value="modelo1">Modelo 1</SelectItem>
                        <SelectItem value="modelo2">Modelo 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input id="tabs-demo-name" placeholder="Capacidade" />
                  <Input id="tabs-demo-name" placeholder="Alcance" />
                  <Button>Criar Aeronave</Button>
                </div>

              </CardContent>
              <CardFooter>
                <Sair />
              </CardFooter>
            </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="Etapa">
            <motion.div
                key="info"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden p-4 border rounded-lg bg-card shadow-sm"
              >
            <Card>
              <CardHeader>
                <CardTitle>Etapa</CardTitle>
                <CardDescription>
                  Apos Escolher a Etapa, voce podera iniciar ou finalizar a etapa, assim como adicionar funcionarios a ela.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="current">Criar Etapa</Label>
                  <Input id="current" placeholder="Nome da Etapa" />
                  <Input id="current" placeholder="Prazo da Etapa" />
                  <Button>Criar Etapa</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new">Escolher Etapa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Etapas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Etapas</SelectLabel>
                        <SelectItem value="etapa1">Etapa 1</SelectItem>
                        <SelectItem value="etapa2">Etapa 2</SelectItem>
                        <SelectItem value="etapa3">Etapa 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Selecionar Etapa</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm">Criar Funcionario</Label>
                  <Input id="confirm" placeholder="Nome do Funcionario" />
                  <Input id="confirm" placeholder="Numero do Funcionario" />
                  <Input id="confirm" placeholder="Endereco do Funcionario" />
                  <Input id="confirm" placeholder="Usuario do Funcionario" />
                  <Input id="confirm" placeholder="Senha do Funcionario" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Cargo do Funcionario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Cargos</SelectLabel>
                        <SelectItem value="cargo1">Cargo 1</SelectItem>
                        <SelectItem value="cargo2">Cargo 2</SelectItem>
                        <SelectItem value="cargo3">Cargo 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Criar Funcionario</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Sair />
              </CardFooter>
            </Card>
            </motion.div>
          </TabsContent>
           <TabsContent value="EditEtapa">
            <motion.div
                key="info"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden p-4 border rounded-lg bg-card shadow-sm"
              >
            <Card>
              <CardHeader>
                <CardTitle>Editar Etapa</CardTitle>
                <CardDescription>
                  Apos Escolher a Etapa, voce podera iniciar ou finalizar a etapa, assim como adicionar funcionarios a ela.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="current">Iniciar Etapa</Label>
                  <Button>Iniciar</Button>
                  <Label htmlFor="current">Finalizar Etapa</Label>
                  <Button>Finalizar</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new">Adicionar funcionario a Etapa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Funcionarios" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Funcionarios</SelectLabel>
                        <SelectItem value="funcionario1">Funcionario 1</SelectItem>
                        <SelectItem value="funcionario2">Funcionario 2</SelectItem>
                        <SelectItem value="funcionario3">Funcionario 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Adicionar</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Sair />
              </CardFooter>
            </Card>
            </motion.div>
          </TabsContent>
          
           <TabsContent value="Peca">
            <motion.div
                key="info"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden p-4 border rounded-lg bg-card shadow-sm"
              >
            <Card>
              <CardHeader>
                <CardTitle>Peca</CardTitle>
                <CardDescription>
                  crie ou edite uma peça.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="current">Escolher Peça</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Peças" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Peças</SelectLabel>
                        <SelectItem value="peca1">Peça 1</SelectItem>
                        <SelectItem value="peca2">Peça 2</SelectItem>
                        <SelectItem value="peca3">Peça 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Selecionar Peça</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new">Criar Peça</Label>
                  <Input id="new" placeholder="Nome da Peça" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo da Peça" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipos</SelectLabel>
                        <SelectItem value="tipo1">Tipo 1</SelectItem>
                        <SelectItem value="tipo2">Tipo 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input id="new" placeholder="Fornecedor da Peça" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status da Peça" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="em_producao">Em produção</SelectItem>
                        <SelectItem value="em_transporte">Em transporte</SelectItem>
                        <SelectItem value="entregue">Entregue</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Criar Peça</Button>
                </div>  
                <div className="grid gap-2">
                  <Label htmlFor="confirm">Quando a peça for selecionada ira atualizar o status:</Label>
                  <Label>em produção -{'>'} em transporte -{'>'} entregue</Label>
                  <Button>atualizar status Peça</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Sair />
              </CardFooter>
            </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="Teste">
            <motion.div
              key="info"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="overflow-hidden p-4 border rounded-lg bg-card shadow-sm"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Teste</CardTitle>
                  <CardDescription>
                    Faca testes da aplicação aqui.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="current">Criar Teste</Label>
                  <Input id="current" placeholder="Nome do Teste" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo do Teste" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipos</SelectLabel>
                        <SelectItem value="tipo1">Aerodinamico</SelectItem>
                        <SelectItem value="tipo2">Mecanico</SelectItem>
                        <SelectItem value="tipo3">Eletronico</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Resultado do Teste" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Resultados</SelectLabel>
                          <SelectItem value="resultado1">Aprovado</SelectItem>
                          <SelectItem value="resultado2">Reprovado</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  <Button>Criar Teste</Button>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new">Escolher Teste</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Testes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Testes</SelectLabel>
                        <SelectItem value="teste1">Teste 1</SelectItem>
                        <SelectItem value="teste2">Teste 2</SelectItem>
                        <SelectItem value="teste3">Teste 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button>Selecionar Teste</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Sair />
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
      {hud()}
    </div>
  </>
  )
}

function hud() {
  return (
    <div className="grid gap-6 p-6 bg-background text-foreground rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Informações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <p><b>Código:</b> 0001</p>
          <p><b>Modelo:</b> B15 Thunder</p>
          <p><b>Tipo:</b> Militar</p>
          <p><b>Capacidade:</b> 1</p>
          <p><b>Alcance:</b> 200.000 m</p>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Testes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="flex justify-between p-2 border rounded-lg">
              <span><b>Tipo:</b> Aerodinâmico</span>
              <Badge variant="default">Aprovado</Badge>
            </div>
            <div className="flex justify-between p-2 border rounded-lg">
              <span><b>Tipo:</b> Vibração Estrutural</span>
              <Badge variant="default">Aprovado</Badge>
            </div>
            <div className="flex justify-between p-2 border rounded-lg">
              <span><b>Tipo:</b> Controle de Temperatura</span>
              <Badge variant="destructive">Reprovado</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Etapas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p><b>Nome:</b> Estrutura Base</p>
                <p><b>Prazo:</b> 5 Semanas</p>
              </div>
              <Badge variant="outline">Pendente</Badge>
            </div>
            <Separator />
            <div>
              <p className="font-medium mb-1">Funcionários:</p>
              <ul className="grid gap-2">
                <li className="p-2 border rounded-md bg-muted/30">
                  <p><b>Nome:</b> Ryan</p>
                  <p><b>Telefone:</b> 12 98878-5437</p>
                  <p><b>Usuário:</b> ryan_dev</p>
                  <p><b>Nível:</b>Mecânico</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p><b>Nome:</b> Montagem da Asa</p>
                <p><b>Prazo:</b> 5 Semestres</p>
              </div>
              <Badge variant="outline">Pendente</Badge>
            </div>
            <Separator />
            <div>
              <p className="font-medium mb-1">Funcionários:</p>
              <ul className="grid gap-2">
                <li className="p-2 border rounded-md bg-muted/30">
                  <p><b>Nome:</b> Administrador</p>
                  <p><b>Telefone:</b> 00 00000-0000</p>
                  <p><b>Usuário:</b> admin</p>
                  <p><b>Nível:</b> Administrador</p>
                </li>
                <li className="p-2 border rounded-md bg-muted/30">
                  <p><b>Nome:</b> Ryan</p>
                  <p><b>Telefone:</b> 12 98878-5437</p>
                  <p><b>Usuário:</b> ryan_dev</p>
                  <p><b>Nível:</b> Mecânico</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p><b>Nome:</b> Revisão Final</p>
                <p><b>Prazo:</b> 5 Semanas</p>
              </div>
              <Badge variant="outline">Em Andamento</Badge>
            </div>
            <Separator />
            <div>
              <p className="font-medium mb-1">Funcionários:</p>
              <ul className="grid gap-2">
                <li className="p-2 border rounded-md bg-muted/30">
                  <p><b>Nome:</b> Administrador</p>
                  <p><b>Telefone:</b> 00 00000-0000</p>
                  <p><b>Usuário:</b> admin</p>
                  <p><b>Nível:</b> Administrador</p>
                </li>
                <li className="p-2 border rounded-md bg-muted/30">
                  <p><b>Nome:</b> Ryan</p>
                  <p><b>Telefone:</b> 12 98878-5437</p>
                  <p><b>Usuário:</b> ryan_dev</p>
                  <p><b>Nível:</b> Mecânico</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Peças</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="p-2 border rounded-lg flex justify-between">
            <div>
              <p><b>Nome:</b> Bico Ejetor de Metano</p>
              <p><b>Tipo:</b> Importada</p>
              <p><b>Fornecedor:</b> NASA</p>
            </div>
            <Badge variant="secondary">Em Transporte</Badge>
          </div>
          <div className="p-2 border rounded-lg flex justify-between">
            <div>
              <p><b>Nome:</b> Painel de Controle Central</p>
              <p><b>Tipo:</b> Nacional</p>
              <p><b>Fornecedor:</b> Embraer</p>
            </div>
            <Badge variant="secondary">Estoque</Badge>
          </div>
          <div className="p-2 border rounded-lg flex justify-between">
            <div>
              <p><b>Nome:</b> Turbina Auxiliar</p>
              <p><b>Tipo:</b> Importada</p>
              <p><b>Fornecedor:</b> SpaceX</p>
            </div>
            <Badge variant="secondary">Instalada</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Sair() {
  const navigate = useNavigate();
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <form onSubmit={handleLogout}>
    <div>
      <Button type="submit">Sair</Button>
    </div>
    </form>
  );
}

export default Aerocode;
